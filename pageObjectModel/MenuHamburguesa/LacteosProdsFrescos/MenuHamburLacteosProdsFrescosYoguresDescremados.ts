import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosYoguresDescremados extends BasePage {

    readonly YOGURES_DESCREMADOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.YOGURES_DESCREMADOS = this.page.locator('//a [@id="menu-item-category-yogures-descremados"]')
    }

    async clickLacteosProdsFrescosYoguresDescremados(): Promise<void> {
        await this.click(this.YOGURES_DESCREMADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosYoguresDescremados(): Promise<void> {
        await this.clickLacteosProdsFrescosYoguresDescremados()
    }
}
