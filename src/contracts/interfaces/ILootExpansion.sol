pragma solidity ^0.7.6;

interface ILootExpansion {
  // To signal being a loot Expansion contract
  function lootExpansionTokenUri(uint256 lootId) external view returns (string memory tokenUri);

  // Returns the fee the expansion is charging per claim
  function claimFeeAmount() external view returns (uint256 feeAmount);

  // Returns the address to which the fee should be sent to
  function claimFeeRecipient() external view returns (address feeRecipient);

  // Return the maximum supply for this expansion. If none, return 2**256-1
  function maxSupply() external view returns (uint256 expansionMaxSupply);
}