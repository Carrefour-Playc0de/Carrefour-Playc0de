import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPanaderiaEspecialidadesSaladas extends BasePage {

    readonly ESPECIALIDADES_SALADAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESPECIALIDADES_SALADAS = this.page.locator('//a [@id="menu-item-category-especialidades-saladas"]')
    }

    async clickPanaderiaEspecialidadesSaladas(): Promise<void> {
        await this.click(this.ESPECIALIDADES_SALADAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderiaEspecialidadesSaladas(): Promise<void> {
        await this.clickPanaderiaEspecialidadesSaladas()
    }
}
