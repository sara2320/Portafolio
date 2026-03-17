import axios from "axios";
import { appParams } from "../lib/app-params";

const { appId, token, functionsVersion, appBaseUrl } = appParams;

export const base44 = axios.create({
  baseURL: appBaseUrl || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "x-app-id": appId,
    Authorization: token ? `Bearer ${token}` : undefined,
    "x-functions-version": functionsVersion,
  },
});
