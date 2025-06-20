/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { uploadMappingsListUploadMappings } from "../../funcs/uploadMappingsListUploadMappings.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  folder: z.string().optional(),
  nextCursor: z.string().optional(),
  maxResults: z.number().int().default(10),
};

export const tool$uploadMappingsListUploadMappings: ToolDefinition<
  typeof args
> = {
  name: "list-upload-mappings",
  description:
    `Retrieves a list of all upload mapping rules configured in your Cloudinary product environment

Returns a list of all upload mappings defined for your account.
Upload mappings allow you to map an upload preset to a specific folder and URL template.
`,
  scopes: ["builder"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await uploadMappingsListUploadMappings(
      client,
      args.folder,
      args.nextCursor,
      args.maxResults,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
