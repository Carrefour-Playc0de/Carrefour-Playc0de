import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosFiambresFeteados extends BasePage {

    readonly FIAMBRES_FETEADOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FIAMBRES_FETEADOS = this.page.locator('//a [@id="menu-item-category-fiambres-feteados"]')
    }

    async clickLacteosProdsFrescosFiambresFeteados(): Promise<void> {
        await this.click(this.FIAMBRES_FETEADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosFiambresFeteados(): Promise<void> {
        await this.clickLacteosProdsFrescosFiambresFeteados()
    }
}
