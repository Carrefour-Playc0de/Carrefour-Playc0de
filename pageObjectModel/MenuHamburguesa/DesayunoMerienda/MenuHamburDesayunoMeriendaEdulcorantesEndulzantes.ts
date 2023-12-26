import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaEdulcorantesEndulzantes extends BasePage {

    readonly EDULCORANTES_ENDULZANTES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.EDULCORANTES_ENDULZANTES = this.page.locator('//a [@id="menu-item-category-edulcorante-endulzante"]')
    }

    async clickDesayunoMeriendaEdulcorantesEndulzantes(): Promise<void> {
        await this.click(this.EDULCORANTES_ENDULZANTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaEdulcorantesEndulzantes(): Promise<void> {
        await this.clickDesayunoMeriendaEdulcorantesEndulzantes()
    }
}
