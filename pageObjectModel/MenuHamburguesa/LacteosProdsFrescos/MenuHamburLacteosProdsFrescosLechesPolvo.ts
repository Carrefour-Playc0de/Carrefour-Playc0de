import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosLechesPolvo extends BasePage {

    readonly LECHES_POLVO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LECHES_POLVO = this.page.locator('//a [@id="menu-item-category-leches-polvo"]')
    }

    async clickLacteosProdsFrescosLechesPolvo(): Promise<void> {
        await this.click(this.LECHES_POLVO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosLechesPolvo(): Promise<void> {
        await this.clickLacteosProdsFrescosLechesPolvo()
    }
}
