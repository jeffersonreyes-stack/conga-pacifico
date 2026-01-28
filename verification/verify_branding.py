import time
from playwright.sync_api import sync_playwright

def verify_branding():
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        try:
            # Navigate to home page
            print("Navigating to home page...")
            page.goto("http://localhost:3000")

            # Wait for content to load
            page.wait_for_load_state("networkidle")

            # Wait a bit for animations if any
            time.sleep(2)

            # Screenshot Header
            print("Taking header screenshot...")
            header_loc = page.locator("header")
            header_loc.wait_for()
            # Take screenshot of the top area including header
            page.screenshot(path="verification/header_branding.png", clip={'x': 0, 'y': 0, 'width': 1280, 'height': 150})

            # Scroll to Footer
            print("Scrolling to footer...")
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            time.sleep(1)

            # Screenshot Footer
            print("Taking footer screenshot...")
            footer_loc = page.locator("footer")
            footer_loc.scroll_into_view_if_needed()
            footer_loc.screenshot(path="verification/footer_branding.png")

            print("Screenshots saved.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_branding()
