from playwright.sync_api import sync_playwright

def verify_contact_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to Contact Page
        page.goto("http://localhost:3000/contacto")

        # Wait for content to load
        page.wait_for_selector("h3:text('Información Directa')")

        # Check for specific text updates
        content = page.content()

        errors = []
        if "av 6N # 14N - 31" not in content:
            errors.append("Address not found")
        if "+57 301 229 3970" not in content:
            errors.append("Phone not found")
        if "congapacifico@gmail.com" not in content:
            errors.append("Email not found")

        if errors:
            print("Errors found:", errors)
        else:
            print("All contact info verified successfully!")

        # Screenshot
        page.screenshot(path="verification/contact_page_verified.png")
        browser.close()

if __name__ == "__main__":
    verify_contact_page()
