pragma solidity ^0.7.6;
import "@openzeppelin/contracts/utils/Strings.sol";

contract MockExpansionNoFee {
  using Strings for uint256;

  // To signal being a loot Expansion contract
  function lootExpansionTokenUri(uint256 lootId) external view returns (string memory tokenUri) {
    return string(abi.encodePacked("https://baseURI.net/", lootId.toString()));
  }
}