pragma solidity ^0.7.6;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./interfaces/ILootExpansion.sol";

contract LootRegistry is ERC721 {
  
  // Track all expansions in an array
  address[] public expansions;

  // Mapping between expansion ID and its address
  mapping (uint256 => address) public expansionIDtoAddress;

  // Mapping between expansion address and its ID
  mapping (address => uint256) public expansionAddressToID;

  // Register the claiming fee amount for each expansion
  mapping (address => uint256) public claimingFee;

  // Register the claiming fee recipient for each expansion
  mapping (address => address) public feeRecipient;

  // Events
  event ExpansionRegistered(address indexed expansionAddress, uint256 indexed expansionID, uint256 indexed feeAmount, address feeRecipient);

  constructor() ERC721("LootRegistry", "LootExpansion") {}

  /**
   * @notice Will add a new loot expansion contract in the registry
   * @param _expansionAddress Address of the expansion contract to add to registry
   */
  function registerLootExpansion(address _expansionAddress) external {
    require(
      expansionAddressToID[_expansionAddress] == 0, 
      "LootRegistry#registerLootExpansion: Expansion already registered"
    );

    // Check if contract implements lootExpansionTokenUri and if it returns anything
    try ILootExpansion(_expansionAddress).lootExpansionTokenUri(1) returns (string memory _uri) {
      require(bytes(_uri).length > 0, "LootRegistry#registerLootExpansion: Expansion doesn't support lootExpansionTokenUri");
    } catch {
      revert("LootRegistry#registerLootExpansion: Expansion doesn't support lootExpansionTokenUri");
    }
     
    // Register expansion information
    expansions.push(_expansionAddress);
    uint256 expansionID = expansions.length;
    expansionIDtoAddress[expansionID] = _expansionAddress;
    expansionAddressToID[_expansionAddress] = expansionID;

    // Try see if expansion implements a fee
    try ILootExpansion(_expansionAddress).claimFeeAmount() returns (uint256 _fee) {
      claimingFee[_expansionAddress] = _fee;
      feeRecipient[_expansionAddress] = ILootExpansion(_expansionAddress).claimFeeRecipient();
    } catch {
      // Do nothing 
    }

    // Emit event of expansion registration
    emit ExpansionRegistered(_expansionAddress, expansionID, claimingFee[_expansionAddress] , feeRecipient[_expansionAddress]);
  }

  /**
   * @notice Return array of all expansions registered
   */
  function getExpansions() external view returns (address[] memory) {
    return expansions;
  }

}