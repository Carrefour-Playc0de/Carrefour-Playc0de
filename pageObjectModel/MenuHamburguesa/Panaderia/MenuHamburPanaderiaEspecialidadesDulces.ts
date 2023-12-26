import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPanaderiaEspecialidadesDulces extends BasePage {

    readonly ESPECIALIDADES_DULCES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESPECIALIDADES_DULCES = this.page.locator('//a [@id="menu-item-category-especialidades-dulces"]')
    }

    async clickPanaderiaEspecialidadesDulces(): Promise<void> {
        await this.click(this.ESPECIALIDADES_DULCES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderiaEspecialidadesDulces(): Promise<void> {
        await this.clickPanaderiaEspecialidadesDulces()
    }
}
