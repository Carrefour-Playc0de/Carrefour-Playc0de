import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaSecadoresPelo extends BasePage {

    readonly SECADORES_PELO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SECADORES_PELO =this.page.locator('//a [@id="menu-item-category-secadores-pelo"]')
    }

    async clickElectroTecnologiaSecadoresPelo(): Promise<void> {
        await this.click(this.SECADORES_PELO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaSecadoresPelo(): Promise<void> {
        await this.clickElectroTecnologiaSecadoresPelo()
    }
}
