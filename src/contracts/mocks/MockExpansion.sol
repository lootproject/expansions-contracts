pragma solidity ^0.7.6;
import "@openzeppelin/contracts/utils/Strings.sol";
import "../interfaces/ILootExpansion.sol";

contract MockExpansion is ILootExpansion {
  using Strings for uint256;
  uint256 feeAmount;
  address feeRecipient;

  // Set the fee for claiming
  function setFee(uint256 _feeAmount) external {
    feeAmount = _feeAmount;
  }

  // Set the fee recipient for claiming
  function setRecipient(address _feeRecipient) external {
    feeRecipient = _feeRecipient;
  }

  // To signal being a loot Expansion contract
  function lootExpansionTokenUri(uint256 lootId) external override pure returns (string memory) {
    return string(abi.encodePacked("https://baseURI.net/", lootId.toString()));
  }

  // Returns the fee the expansion is charging per claim
  function claimFeeAmount() external override view returns (uint256) {
    return feeAmount;
  }

  // Returns the address to which the fee should be sent to
  function claimFeeRecipient() external override view returns (address) {
    return feeRecipient;
  }

  // Return the maximum supply for this expansion. If none, return 2**256-1
  function maxSupply() external view returns (uint256) {
    return 8000;
  }
}