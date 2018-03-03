pragma solidity ^0.4.18;
import "../contracts/erc721.sol";
import "../contracts/Ownable.sol";

contract Yown is Ownable {

    event Creation(uint assetId);

    uint registrationFee = 0.001 ether;
    /*
    Definition of asset
    */
    struct YownAsset {
        address owner;
        address seller;
        uint creationDate;
        uint warrantyEndDate;
        string description; // Product name, color, model number. Human readable
    }
    YownAsset[] assets;
    mapping(uint => address) assetToOwner;

    /*
    Function to create a new asset. The seller of the assets calls this function
    Seller pays for the registration on the blockchain
    */
    function createAsset(address _owner, string _description, uint _warrantyEndDate) public returns (uint) {
        //require(msg.value == registrationFee);

        uint assetId = assets.push(YownAsset(
            _owner, msg.sender, uint(now),
            _warrantyEndDate, _description
            )
        ) - 1; // returns the length of the array, assetId is length - 1

        assetToOwner[assetId] = _owner;
        return assetId;
    }

    function isUnderWarranty(uint _assetId) public view returns (bool) {
        YownAsset memory asset = assets[_assetId]; 
        return asset.warrantyEndDate > asset.creationDate;
    }

    function viewAsset(uint _assetId) public view returns (string, uint, uint) {
        YownAsset memory asset = assets[_assetId]; 

        return (asset.description, asset.creationDate, asset.warrantyEndDate);
    }

    function numberOfAssets() public view returns (uint) {
        return assets.length;
    }


}