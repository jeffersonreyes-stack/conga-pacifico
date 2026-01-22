from playwright.sync_api import sync_playwright

def verify_fixes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to homepage
        page.goto("http://localhost:3000")

        # Check Header Logo
        header_logo = page.locator("header img[alt='CONGA PACIFICO Logo']")
        header_src = header_logo.get_attribute("src")
        print(f"Header Logo Src: {header_src}")

        # Check Footer
        footer = page.locator("footer")
        footer.scroll_into_view_if_needed()
        page.screenshot(path="verification/footer_check_final.png")

        # Check Footer Logo
        footer_logo = footer.locator("img[alt='CONGA PACIFICO']")
        footer_src = footer_logo.get_attribute("src")
        print(f"Footer Logo Src: {footer_src}")

        # Check Contact Info
        contact_text = footer.inner_text()
        print("Footer Text Content:")
        print(contact_text)

        browser.close()

if __name__ == "__main__":
    verify_fixes()
