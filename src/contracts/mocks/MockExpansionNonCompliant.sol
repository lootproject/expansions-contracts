pragma solidity ^0.7.6;
import "@openzeppelin/contracts/utils/Strings.sol";

contract MockExpansionNonCompliant {
  using Strings for uint256;

  // To signal being a loot Expansion contract
  function tokenUri(uint256 lootId) external pure returns (string memory) {
    return string(abi.encodePacked("https://baseURI.net/", lootId.toString()));
  }
}