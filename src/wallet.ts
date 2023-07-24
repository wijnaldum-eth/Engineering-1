import { PaperEmbeddedWalletSdk, RecoveryShareManagement } from "@paperxyz/embedded-wallet-service-sdk";

const sdk = new PaperEmbeddedWalletSdk({
  clientId: "c1e1c50a-dde5-4411-83c6-7867ede4a3d5",
  chain: "Mumbai",
  advancedOptions: {
    recoveryShareManagement: RecoveryShareManagement.AWS_MANAGED
  }
});