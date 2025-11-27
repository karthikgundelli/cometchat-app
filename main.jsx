import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"
import {
  UIKitSettingsBuilder,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import { setupLocalization } from "./CometChat/utils/utils.ts";
import { CometChatProvider } from "./CometChat/context/CometChatContext";

export const COMETCHAT_CONSTANTS = {
  APP_ID: "1672132ad73d3cd3e", // Replace with your App ID
  REGION: "IN", // Replace with your App Region
  AUTH_KEY: "dd53854025c6fa705904bb1c9b8d4841a2f32079", // Replace with your Auth Key or leave blank if you are authenticating using Auth Token
};

const uiKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

CometChatUIKit.init(uiKitSettings)?.then(() => {
  setupLocalization();
  createRoot(document.getElementById("root")).render(
    <CometChatProvider>
      <App/>
    </CometChatProvider>
  );
});