const Yown = artifacts.require("Yown");

contract('Yown test', async (accounts) => {

 it("should put have 0 assets when first created", async () => {
     let instance = await Yown.deployed();
     let number = await instance.numberOfAssets.call();
     assert.equal(number.valueOf(), 0);
  })

  it("should correctly create an asset", async () => {
    let instance = await Yown.deployed();
    let assetId = await instance.createAsset.call(accounts[3], "test asset", 123124);
    assert.equal(assetId.valueOf(), 0);

  })

  it("should correctly return an asset", async () => {
    let instance = await Yown.deployed();
    let assetId = await instance.createAsset.call(accounts[3], "test asset", 123124);
    assert.equal(assetId.valueOf(), 0);

    let assetItems = await instance.viewAsset.call(assetId);
    assert.equal(assetItems.valueOf()[0], "test asset");
  })

  it("should correctly determine if an asset is under warranty", async () => {
    let instance = await Yown.deployed();
    let assetId = await instance.createAsset.call(accounts[3], "test asset", new Date().getTime() + 10);
    assert.equal(assetId.valueOf(), 0);

    let warranty = await instance.isUnderWarranty.call(assetId);
    assert.equal(warranty.valueOf(), true);
  })

})