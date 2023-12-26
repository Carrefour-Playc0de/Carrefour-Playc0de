import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilBicicletas extends BasePage {

    readonly BICICLETAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BICICLETAS = this.page.locator('//a [@id="menu-item-category-bicicletas"]')
    }

    async clickBazarTextilBicicletas(): Promise<void> {
        await this.click(this.BICICLETAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilBicicletas(): Promise<void> {
        await this.clickBazarTextilBicicletas()
    }
}
