import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilAccesoriosAuto extends BasePage {

    readonly ACCESORIOS_AUTO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACCESORIOS_AUTO = this.page.locator('//a [@id="menu-item-category-accesorios-autos"]')
    }

    async clickBazarTextilAccesoriosAuto(): Promise<void> {
        await this.click(this.ACCESORIOS_AUTO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilAccesoriosAuto(): Promise<void> {
        await this.clickBazarTextilAccesoriosAuto()
    }
}
