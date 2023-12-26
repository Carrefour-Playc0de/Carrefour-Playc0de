import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilFerreteriaPintura extends BasePage {

    readonly FERRETERIA_PINTURA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FERRETERIA_PINTURA = this.page.locator('//a [@id="menu-item-category-ferreteria-pintura"]')
    }

    async clickBazarTextilFerreteriaPintura(): Promise<void> {
        await this.click(this.FERRETERIA_PINTURA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilFerreteriaPintura(): Promise<void> {
        await this.clickBazarTextilFerreteriaPintura()
    }
}
