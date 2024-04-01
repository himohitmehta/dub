/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The tag IDs to filter the links by.
 */
export type GetLinksCountQueryParamTagIds = string | Array<string>;

export enum Two {
    TagId = "tagId",
}

export enum One {
    Domain = "domain",
}

/**
 * The field to group the links by.
 */
export type GroupBy = One | Two;

export type GetLinksCountRequest = {
    /**
     * The ID of the workspace the link belongs to.
     */
    workspaceId: string;
    /**
     * The domain to filter the links by. E.g. `ac.me`. If not provided, all links for the workspace will be returned.
     */
    domain?: string | undefined;
    /**
     * [DEPRECATED] (use tagIds instead): The tag ID to filter the links by.
     */
    tagId?: string | undefined;
    /**
     * The tag IDs to filter the links by.
     */
    tagIds?: string | Array<string> | undefined;
    /**
     * The search term to filter the links by. The search term will be matched against the short link slug and the destination url.
     */
    search?: string | undefined;
    /**
     * The user ID to filter the links by.
     */
    userId?: string | undefined;
    /**
     * Whether to include archived links in the response. Defaults to `false` if not provided.
     */
    showArchived?: boolean | undefined;
    /**
     * Whether to include tags in the response. Defaults to `false` if not provided.
     */
    withTags?: boolean | undefined;
    /**
     * The field to group the links by.
     */
    groupBy?: One | Two | undefined;
};

/** @internal */
export namespace GetLinksCountQueryParamTagIds$ {
    export type Inbound = string | Array<string>;

    export type Outbound = string | Array<string>;
    export const inboundSchema: z.ZodType<GetLinksCountQueryParamTagIds, z.ZodTypeDef, Inbound> =
        z.union([z.string(), z.array(z.string())]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLinksCountQueryParamTagIds> =
        z.union([z.string(), z.array(z.string())]);
}

/** @internal */
export const Two$ = z.nativeEnum(Two);

/** @internal */
export const One$ = z.nativeEnum(One);

/** @internal */
export namespace GroupBy$ {
    export type Inbound = One | Two;

    export type Outbound = One | Two;
    export const inboundSchema: z.ZodType<GroupBy, z.ZodTypeDef, Inbound> = z.union([One$, Two$]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GroupBy> = z.union([One$, Two$]);
}

/** @internal */
export namespace GetLinksCountRequest$ {
    export type Inbound = {
        workspaceId: string;
        domain?: string | undefined;
        tagId?: string | undefined;
        tagIds?: string | Array<string> | undefined;
        search?: string | undefined;
        userId?: string | undefined;
        showArchived?: boolean | undefined;
        withTags?: boolean | undefined;
        groupBy?: One | Two | undefined;
    };

    export const inboundSchema: z.ZodType<GetLinksCountRequest, z.ZodTypeDef, Inbound> = z
        .object({
            workspaceId: z.string(),
            domain: z.string().optional(),
            tagId: z.string().optional(),
            tagIds: z.union([z.string(), z.array(z.string())]).optional(),
            search: z.string().optional(),
            userId: z.string().optional(),
            showArchived: z.boolean().default(false),
            withTags: z.boolean().default(false),
            groupBy: z.union([One$, Two$]).optional(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.tagId === undefined ? null : { tagId: v.tagId }),
                ...(v.tagIds === undefined ? null : { tagIds: v.tagIds }),
                ...(v.search === undefined ? null : { search: v.search }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
                showArchived: v.showArchived,
                withTags: v.withTags,
                ...(v.groupBy === undefined ? null : { groupBy: v.groupBy }),
            };
        });

    export type Outbound = {
        workspaceId: string;
        domain?: string | undefined;
        tagId?: string | undefined;
        tagIds?: string | Array<string> | undefined;
        search?: string | undefined;
        userId?: string | undefined;
        showArchived: boolean;
        withTags: boolean;
        groupBy?: One | Two | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLinksCountRequest> = z
        .object({
            workspaceId: z.string(),
            domain: z.string().optional(),
            tagId: z.string().optional(),
            tagIds: z.union([z.string(), z.array(z.string())]).optional(),
            search: z.string().optional(),
            userId: z.string().optional(),
            showArchived: z.boolean().default(false),
            withTags: z.boolean().default(false),
            groupBy: z.union([One$, Two$]).optional(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.tagId === undefined ? null : { tagId: v.tagId }),
                ...(v.tagIds === undefined ? null : { tagIds: v.tagIds }),
                ...(v.search === undefined ? null : { search: v.search }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
                showArchived: v.showArchived,
                withTags: v.withTags,
                ...(v.groupBy === undefined ? null : { groupBy: v.groupBy }),
            };
        });
}
