import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilVasosCopas extends BasePage {

    readonly VASOS_COPAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VASOS_COPAS = this.page.locator('//a [@id="menu-item-category-bazar-vasos-copas"]')
    }

    async clickBazarTextilVasosCopas(): Promise<void> {
        await this.click(this.VASOS_COPAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilVasosCopas(): Promise<void> {
        await this.clickBazarTextilVasosCopas()
    }
}
