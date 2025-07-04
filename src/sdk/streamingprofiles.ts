/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { streamingProfilesCreateStreamingProfile } from "../funcs/streamingProfilesCreateStreamingProfile.js";
import { streamingProfilesDeleteStreamingProfile } from "../funcs/streamingProfilesDeleteStreamingProfile.js";
import { streamingProfilesGetStreamingProfile } from "../funcs/streamingProfilesGetStreamingProfile.js";
import { streamingProfilesGetStreamingProfiles } from "../funcs/streamingProfilesGetStreamingProfiles.js";
import { streamingProfilesUpdateStreamingProfile } from "../funcs/streamingProfilesUpdateStreamingProfile.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class StreamingProfiles extends ClientSDK {
  /**
   * Creates a new adaptive streaming profile in your Cloudinary account
   */
  async createStreamingProfile(
    request: components.StreamingProfileCreate,
    options?: RequestOptions,
  ): Promise<operations.CreateStreamingProfileResponse> {
    return unwrapAsync(streamingProfilesCreateStreamingProfile(
      this,
      request,
      options,
    ));
  }

  /**
   * Lists all adaptive streaming profiles (both built-in and custom) defined in your Cloudinary account
   */
  async getStreamingProfiles(
    request: operations.GetStreamingProfilesRequest,
    options?: RequestOptions,
  ): Promise<operations.GetStreamingProfilesResponse> {
    return unwrapAsync(streamingProfilesGetStreamingProfiles(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieves the details of a single adaptive streaming profile by its name
   */
  async getStreamingProfile(
    name: string,
    options?: RequestOptions,
  ): Promise<operations.GetStreamingProfileResponse> {
    return unwrapAsync(streamingProfilesGetStreamingProfile(
      this,
      name,
      options,
    ));
  }

  /**
   * Modifies an existing adaptive streaming profile's configuration
   */
  async updateStreamingProfile(
    name: string,
    streamingProfileUpdate: components.StreamingProfileUpdate,
    options?: RequestOptions,
  ): Promise<operations.UpdateStreamingProfileResponse> {
    return unwrapAsync(streamingProfilesUpdateStreamingProfile(
      this,
      name,
      streamingProfileUpdate,
      options,
    ));
  }

  /**
   * Delete custom streaming profile or revert built-in profile to the original settings
   */
  async deleteStreamingProfile(
    name: string,
    options?: RequestOptions,
  ): Promise<operations.DeleteStreamingProfileResponse> {
    return unwrapAsync(streamingProfilesDeleteStreamingProfile(
      this,
      name,
      options,
    ));
  }
}
