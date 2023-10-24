"use client";

import Container from "~/components/container";
import TabButtons, { TabButtonsLoading } from "~/components/tab/tab-buttons";
import TabFonts, { TabFontsLoading } from "~/components/tab/tab-fonts";
import TabProfile, { TabProfileLoading } from "~/components/tab/tab-profile";
import TabWrapper from "~/components/tab/tab-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import usePreviewLoading from "~/hooks/use-preview-loading";
import { TABS } from "~/lib/data/constants";
import { ThemeSchema } from "~/server/api/schemas/theme";
import { api } from "~/trpc/react";

export default function AppearancePage() {
  const {
    data: site,
    isLoading: isLoadingSite,
    refetch: refetchSite,
  } = api.site.getSite.useQuery();

  const {
    data: theme,
    isLoading: isLoadingTheme,
    refetch: refetchTheme,
  } = api.theme.getTheme.useQuery();

  const previewLoading = usePreviewLoading();

  const hotReloadTheme = async () => {
    const theme = await refetchTheme();
    const iframe = document.getElementById("preview-page") as HTMLIFrameElement;

    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      {
        type: "theme-updated",
        theme: theme.data,
      },
      "*",
    );
  };

  const hotReloadSite = async () => {
    const site = await refetchSite();
    const iframe = document.getElementById("preview-page") as HTMLIFrameElement;

    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      {
        type: "site-updated",
        site: site.data,
      },
      "*",
    );
  };

  const updateThemeMutation = api.theme.updateTheme.useMutation({
    onMutate: () => {
      previewLoading.setIsLoading(true);
    },
    onSuccess: async () => {
      await hotReloadTheme();
    },
    onSettled: () => {
      previewLoading.setIsLoading(false);
    },
  });

  const handleUpdateTheme = (payload: ThemeSchema) => {
    updateThemeMutation.mutate(payload);
  };
  return (
    <Container>
      <Tabs defaultValue="fonts" className=" h-full w-full">
        <TabsList className="flex h-fit justify-between overflow-x-scroll rounded-full bg-white [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
              className=" flex-1 rounded-full px-4 py-2.5 font-medium hover:bg-violet-700 hover:text-white data-[state=active]:bg-violet-700 data-[state=active]:text-white"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="profile">
          <TabWrapper title="Profile">
            {isLoadingSite ? (
              <TabProfileLoading />
            ) : (
              <TabProfile site={site} refetch={hotReloadSite} />
            )}
          </TabWrapper>
        </TabsContent>
        <TabsContent value="themes">
          {/* <TabThemes theme={dataTheme} refetch={refetchTheme} /> */}
        </TabsContent>
        <TabsContent value="buttons">
          <TabWrapper title="Buttons">
            {isLoadingTheme ? (
              <TabButtonsLoading />
            ) : (
              <TabButtons theme={theme} handleUpdate={handleUpdateTheme} />
            )}
          </TabWrapper>
        </TabsContent>
        <TabsContent value="fonts">
          <TabWrapper title="Fonts">
            {isLoadingTheme ? (
              <TabFontsLoading />
            ) : (
              <TabFonts theme={theme} handleUpdate={handleUpdateTheme} />
            )}
          </TabWrapper>
        </TabsContent>
      </Tabs>
    </Container>
  );
}
