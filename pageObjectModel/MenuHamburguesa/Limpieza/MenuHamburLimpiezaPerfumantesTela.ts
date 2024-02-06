import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaPerfumantesTela extends BasePage {

    readonly PERFUMANTES_TELA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.PERFUMANTES_TELA = this.page.locator('//a [@id="menu-item-category-perfumantes-tela"]')
        this.PERFUMANTES_TELA = this.page.locator("(//div[contains(text(),'Perfumantes para tela')])[1]")
    }

    async clickLimpiezaPerfumantesTela(): Promise<void> {
        await this.click(this.PERFUMANTES_TELA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaPerfumantesTela(): Promise<void> {
        await this.clickLimpiezaPerfumantesTela()
    }
}