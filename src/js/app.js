App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);
    console.log("Loading");
    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Yown.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var YownArtifact = data;
      App.contracts.Yown = TruffleContract(YownArtifact);
    
      // Set the provider for our contract
      App.contracts.Yown.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the adopted pets
      return App.loadAssets();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-register', App.handleRegistration);

  },

  loadAssets: function() {
    var yownInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
    
      var account = accounts[0];
      console.log(account);
      let result = App.contracts.Yown.deployed().then(function(instance) {
        yownInstance = instance;

        $('#pubKey').val(account);
        $('#warranty').val("2020/01/03");
        $('#description').val("Samsung Galaxy S9, 128GB Storage");
        // Execute adopt as a transaction by sending account
        return yownInstance.getAssetsByOwner(account);
      }).then(function(result) {
        console.log(result);
        for (var a in result) {
          web3.eth.getAccounts(function(error, accounts) {
            if (error) {
              console.log(error);
            }
          
            var account = accounts[0];
            App.contracts.Yown.deployed().then(function(instance) {
              yownInstance = instance;
              // Execute adopt as a transaction by sending account
              return yownInstance.viewAsset(a);
            }).then(function(result) {
              var cList = $('#devices');

              let desc = result[0];
              let start = new Date(result[1]*1000);
              let end = new Date(result[2]*1000);


              $("#devices").append(
              `<li class="list-group-item">
              <div class="card">
              <div class="card-header">
                Featured
              </div>
              <div class="card-block">
                <h4 class="card-title">${desc}</h4>
                <p class="card-text">Warranty start: ${start}.</p>
                <p class="card-text">Warranty end: ${end}.</p>
              </div>
            </div>
            </li>`);



            }).catch(function(err) {
              console.log(err.message);
            });
          });
        }
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },


  handleRegistration: function(event) {
    event.preventDefault();

    let pubkey = $('#pubKey').val();
    let description = $('#description').val();
    let endDate = $('#warranty').val();
    endDate = new Date(endDate).getTime() / 1000
    var yownInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
    
      var account = accounts[0];
      App.contracts.Yown.deployed().then(function(instance) {
        yownInstance = instance;

        var creationEvent = yownInstance.Creation();

        creationEvent.watch(function(error, result){
          if (!error)
              {
                //location.reload();
                console.log(result);
              } else {
                  console.log(error);
              }
      });
    
    
        // Execute adopt as a transaction by sending account
        return yownInstance.createAsset(account, description, endDate);
      }).then(function(result) {
        console.log(result);
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },
};

$(function() {
  $(document).ready(function() {
    App.init();
  });
});
