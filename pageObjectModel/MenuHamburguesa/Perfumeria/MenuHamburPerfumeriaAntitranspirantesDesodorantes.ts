import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaAntitranspirantesDesodorantes extends BasePage {

    readonly ANTITRANSPIRANTES_DESODORANTES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ANTITRANSPIRANTES_DESODORANTES = this.page.locator('//*[@id="menu-item-category-antitranspirante-desodorantes"]')
        // Antitranspirantes y Desodorantes
    }

    async clickPerfumeriaAntitranspirantesDesodorantes(): Promise<void> {
        await this.click(this.ANTITRANSPIRANTES_DESODORANTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaAntitranspirantesDesodorantes(): Promise<void> {
        await this.clickPerfumeriaAntitranspirantesDesodorantes()
    }
}
