import time
from playwright.sync_api import sync_playwright

def verify_service_content():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        try:
            pages_to_verify = [
                "/servicios/restauracion-ecologica",
                "/servicios/gestion-forestal",
                "/servicios/tramites-ambientales",
                "/servicios/gestion-social"
            ]

            for path in pages_to_verify:
                print(f"Navigating to {path}...")
                page.goto(f"http://localhost:3000{path}")
                page.wait_for_load_state("networkidle")

                # Screenshot full page
                page_name = path.split('/')[-1]
                print(f"Taking screenshot for {page_name}...")
                page.screenshot(path=f"verification/{page_name}.png", full_page=True)

            print("All screenshots saved.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_service_content()
