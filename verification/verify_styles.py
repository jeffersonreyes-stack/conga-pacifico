
from playwright.sync_api import sync_playwright

def verify_styles():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")
            page.wait_for_selector("body", state="visible")
            # Wait a bit for fonts and styles to load
            page.wait_for_timeout(2000)
            page.screenshot(path="verification/styles_check.png")
            print("Screenshot taken")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_styles()
