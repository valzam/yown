const Yown = artifacts.require("Yown");

function getEventValue(eventName, returnedEvents, valueName) {
  let id = returnedEvents.logs.filter((log) => log.event == eventName);
  return id[0].args[valueName];
}

const futureWarrantyDate = new Date().getTime() + 1000;

contract('Yown test', async (accounts) => {

 it("should put have 0 assets when first created", async () => {
     let instance = await Yown.deployed();
     let number = await instance.numberOfAssets.call();
     assert.equal(number.valueOf(), 0);
  })

  it("should correctly create an asset", async () => {
    let instance = await Yown.deployed();
    let assetId = await instance.createAsset.call(accounts[3], "test asset", futureWarrantyDate);
    assert.equal(assetId.valueOf(), 0);

  })

  it("should correctly return an asset", async () => {
    let instance = await Yown.deployed();
    let receipt = await instance.createAsset(accounts[3], "test asset", futureWarrantyDate);
    let id = getEventValue("Creation", receipt, "assetId");

    let assetItems = await instance.viewAsset.call(id);
    assert.equal(assetItems.valueOf()[0], "test asset");
  })

  it("should correctly determine if an asset is under warranty", async () => {
    let instance = await Yown.deployed();
    let receipt = await instance.createAsset(accounts[3], "test asset", futureWarrantyDate);
    let id = getEventValue("Creation", receipt, "assetId");

    let warranty = await instance.isUnderWarranty.call(id);
    assert.equal(warranty.valueOf(), true);
  })

  it("should correctly identify the owner", async () => {
    let instance = await Yown.deployed();
    let receipt = await instance.createAsset(accounts[3], "test asset", futureWarrantyDate);
    let id = getEventValue("Creation", receipt, "assetId");

    let owner = await instance.ownerOf.call(id);
    assert.equal(owner.valueOf(), accounts[3]);
  })

  it("should correctly handle a transfer", async () => {
    let instance = await Yown.deployed();
    let receipt = await instance.createAsset(accounts[3], "test asset", futureWarrantyDate);
    let id = getEventValue("Creation", receipt, "assetId");

    let r = await instance.transfer(accounts[4], id, {from: accounts[3]});
    let owner = await instance.ownerOf.call(id);
    assert.equal(owner.valueOf(), accounts[4]);
  })


})