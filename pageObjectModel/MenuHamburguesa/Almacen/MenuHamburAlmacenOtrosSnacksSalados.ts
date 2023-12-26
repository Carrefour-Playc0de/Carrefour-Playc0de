import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenOtrosSnacksSalados extends BasePage {

    readonly OTROS_SNACKS_SALADOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.OTROS_SNACKS_SALADOS = this.page.locator('//a [@id="menu-item-category-otros-snacks-salados"]')
    }

    async clickAlmacenOtrosSnacksSalados(): Promise<void> {
        await this.click(this.OTROS_SNACKS_SALADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenOtrosSnacksSalados(): Promise<void> {
        await this.clickAlmacenOtrosSnacksSalados()
    }
}
