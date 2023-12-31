import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburLacteosProdsFrescos extends BasePage {

    readonly LACTEOS_PROD_FRESCOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LACTEOS_PROD_FRESCOS = this.page.locator('//div[contains(text(),"Lácteos y productos frescos")]')
    }

    async clickLacteosProdsFrescos(): Promise<void> {
        await this.click(this.LACTEOS_PROD_FRESCOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(5000)
    }

    async navigateToMenuHamburLacteosProdsFrescos(): Promise<void> {
        await this.clickLacteosProdsFrescos()
    }
}
