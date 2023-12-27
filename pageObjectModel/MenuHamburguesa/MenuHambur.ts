import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburguesa extends BasePage {

    readonly MENU_HAMBURGUESA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MENU_HAMBURGUESA = this.page.locator('//div [@class=\'vtex-store-drawer-0-x-drawerTriggerContainer vtex-store-drawer-0-x-drawerTriggerContainer--menuIconDrawer\']')
    }

    async clickMenuHamburguesa(): Promise<void> {
        await this.click(this.MENU_HAMBURGUESA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburguesa(): Promise<void> {
        await this.clickMenuHamburguesa()
    }
}
