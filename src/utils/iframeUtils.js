export async function switchToIframe(page, iframeSelector) {
    const iframeElement = await page.frameLocator(iframeSelector).elementHandle();
    return iframeElement.contentFrame();
  }
  