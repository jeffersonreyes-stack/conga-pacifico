import time
from playwright.sync_api import sync_playwright

def verify_global_header():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        try:
            pages_to_verify = [
                "/",
                "/servicios",
                "/tecnologia",
                "/proyectos",
                "/contacto",
                "/servicios/restauracion-ecologica"
            ]

            for path in pages_to_verify:
                print(f"Navigating to {path}...")
                page.goto(f"http://localhost:3000{path}")
                page.wait_for_load_state("networkidle")

                # Screenshot Header area
                page_name = path.replace('/', '_')
                if page_name == "_": page_name = "_home"

                print(f"Taking header screenshot for {page_name}...")
                # Capture just the top 200px to see the header clearly
                page.screenshot(path=f"verification/header_check{page_name}.png", clip={'x': 0, 'y': 0, 'width': 1280, 'height': 200})

            print("All header screenshots saved.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_global_header()
