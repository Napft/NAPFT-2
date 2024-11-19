import {
    ThirdwebProvider,
    ConnectButton,
  } from "thirdweb/react";
  import {
    createWallet,
    walletConnect,
    inAppWallet,
  } from "thirdweb/wallets";
  import { createThirdwebClient } from "thirdweb";
  // import { useActiveAccount } from "thirdweb/react";
 

  const client = createThirdwebClient({
    clientId: "1f71f61180e6c8ab15e9ee5dd5ce9a7d",
  });
  
  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    walletConnect(),
    inAppWallet({
      auth: {
        options: [
          "email",
          "google",
          "apple",
          "facebook",
          "phone",
        ],
      },
    }),
    createWallet("com.trustwallet.app"),
    createWallet("me.rainbow"),
    createWallet("app.phantom"),
  ];
  
  export default function Wallet() {
    // const activeAccount = useActiveAccount();
    //     console.log(activeAccount.address);
    return (
      <ThirdwebProvider>
        <ConnectButton
          client={client}
          wallets={wallets}
          theme={"dark"}
          connectModal={{ size: "compact" }}
          
          connectButton={{
            style: {
              background: "none",
              border: "1px solid #176cebed",
              borderRadius: "25px",
              color: "white",
              padding: "5px 25px",
            },
          }}
          detailsButton={{
            style:{
              background: "none",
              border: "none",
              padding: "8px 15px",
            },
            
          }}
        />
      </ThirdwebProvider>
    );
  }