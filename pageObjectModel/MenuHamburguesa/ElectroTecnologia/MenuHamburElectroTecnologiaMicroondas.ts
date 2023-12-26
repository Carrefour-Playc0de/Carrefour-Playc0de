import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaMicroondas extends BasePage {

    readonly MICROONDAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MICROONDAS =this.page.locator('//a [@id="menu-item-category-microondas"]')
    }

    async clickElectroTecnologiaMicroondas(): Promise<void> {
        await this.click(this.MICROONDAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaMicroondas(): Promise<void> {
        await this.clickElectroTecnologiaMicroondas()
    }
}
