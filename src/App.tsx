import { PaperEmbeddedWalletSdk, RecoveryShareManagement } from "@paperxyz/embedded-wallet-service-sdk";
import axios from "axios";

const sdk = new PaperEmbeddedWalletSdk({
  clientId: "MY_CLIENT_ID",
  chain: "Mumbai",
  advancedOptions: {
    recoveryShareManagement: RecoveryShareManagement.AWS_MANAGED
  },
});

const getUser = async () => {
  try {
    const user = await sdk.getUser();
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

// Call when the user clicks your "Connect with Paper" button.
<button onClick={() => sdk.auth.loginWithPaperModal()}>
  Connect with Paper
</button>