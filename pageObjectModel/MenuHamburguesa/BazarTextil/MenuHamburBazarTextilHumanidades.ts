import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilHumanidades extends BasePage {

    readonly HUMANIDADES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HUMANIDADES = this.page.locator('//a [@id="menu-item-category-otros-generos"]')
    }

    async clickBazarTextilHumanidades(): Promise<void> {
        await this.click(this.HUMANIDADES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilHumanidades(): Promise<void> {
        await this.clickBazarTextilHumanidades()
    }
}
