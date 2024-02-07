import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaEscobasSecadoresPalas extends BasePage {

    readonly ESCOBAS_SECADORES_PALAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESCOBAS_SECADORES_PALAS = this.page.locator('//a [@id="menu-item-category-escobas-secadores-palas"]')
    }

    async clickLimpiezaEscobasSecadoresPalas(): Promise<void> {
        await this.click(this.ESCOBAS_SECADORES_PALAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaEscobasSecadoresPalas(): Promise<void> {
        await this.clickLimpiezaEscobasSecadoresPalas()
    }
}
