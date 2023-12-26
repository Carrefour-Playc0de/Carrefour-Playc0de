import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilSabanasFrazadas extends BasePage {

    readonly SABANAS_FRAZADAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SABANAS_FRAZADAS = this.page.locator('//a [@id="menu-item-category-sábanas-y-frazadas"]')
    }

    async clickBazarTextilSabanasFrazadas(): Promise<void> {
        await this.click(this.SABANAS_FRAZADAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilSabanasFrazadas(): Promise<void> {
        await this.clickBazarTextilSabanasFrazadas()
    }
}
