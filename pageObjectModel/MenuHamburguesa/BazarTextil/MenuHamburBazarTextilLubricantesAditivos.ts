import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilLubricantesAditivos extends BasePage {

    readonly LUBRICANTES_ADITIVOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LUBRICANTES_ADITIVOS = this.page.locator('//a [@id="menu-item-category-lubricantes-aditivos"]')
    }

    async clickBazarTextilLubricantesAditivos(): Promise<void> {
        await this.click(this.LUBRICANTES_ADITIVOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilLubricantesAditivos(): Promise<void> {
        await this.clickBazarTextilLubricantesAditivos()
    }
}
