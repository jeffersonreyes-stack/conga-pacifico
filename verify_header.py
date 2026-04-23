import asyncio
from playwright.async_api import async_playwright
import subprocess
import time
import os

async def main():
    # Start the server in the background
    server_process = subprocess.Popen(["npm", "run", "dev", "--", "-p", "3000"])

    # Wait for the server to start (adjust time if needed)
    time.sleep(5)

    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1920, 'height': 1080})
        page = await context.new_page()

        try:
            await page.goto("http://localhost:3000")

            # Wait for any dynamic content to load (adjust as needed)
            await page.wait_for_timeout(2000)

            await page.screenshot(path="/home/jules/verification/screenshots/header_verification.png", full_page=False)
            print("Screenshot saved to /home/jules/verification/screenshots/header_verification.png")

        except Exception as e:
             print(f"Error occurred: {e}")
        finally:
            await browser.close()
            # Terminate the server process
            server_process.terminate()
            server_process.wait()

if __name__ == "__main__":
    asyncio.run(main())
