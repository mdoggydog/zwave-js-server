export enum ControllerCommand {
  beginInclusion = "controller.begin_inclusion",
  stopInclusion = "controller.stop_inclusion",
  beginExclusion = "controller.begin_exclusion",
  stopExclusion = "controller.stop_exclusion",
  removeFailedNode = "controller.remove_failed_node",
  replaceFailedNode = "controller.replace_failed_node",
  healNode = "controller.heal_node",
  beginHealingNetwork = "controller.begin_healing_network",
  stopHealingNetwork = "controller.stop_healing_network",
  isFailedNode = "controller.is_failed_node",
  getAssociationGroups = "controller.get_association_groups",
  getAssociations = "controller.get_associations",
  isAssociationAllowed = "controller.is_association_allowed",
  addAssociations = "controller.add_associations",
  removeAssociations = "controller.remove_associations",
  // Schema version < 3
  removeNodeFromAllAssocations = "controller.remove_node_from_all_assocations",
  // Schema version > 2
  removeNodeFromAllAssociations = "controller.remove_node_from_all_associations",
  getNodeNeighbors = "controller.get_node_neighbors",
  grantSecurityClasses = "controller.grant_security_classes",
  validateDSKAndEnterPIN = "controller.validate_dsk_and_enter_pin",
  provisionSmartStartNode = "controller.provision_smart_start_node",
  unprovisionSmartStartNode = "controller.unprovision_smart_start_node",
  getProvisioningEntry = "controller.get_provisioning_entry",
  getProvisioningEntries = "controller.get_provisioning_entries",
  supportsFeature = "controller.supports_feature",
  backupNVMRaw = "controller.backup_nvm_raw",
  restoreNVM = "controller.restore_nvm",
  setRFRegion = "controller.set_rf_region",
  getRFRegion = "controller.get_rf_region",
  setPowerlevel = "controller.set_powerlevel",
  getPowerlevel = "controller.get_powerlevel",
  getState = "controller.get_state",
}
