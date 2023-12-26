import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilLibreria extends BasePage {

    readonly LIBRERIA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIBRERIA = this.page.locator('//a [@id="menu-item-category-libreria"]')
    }

    async clickBazarTextilLibreria(): Promise<void> {
        await this.click(this.LIBRERIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilLibreria(): Promise<void> {
        await this.clickBazarTextilLibreria()
    }
}
