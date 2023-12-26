import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosTapasPastasFrescas extends BasePage {

    readonly TAPAS_PASTAS_FRESCAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TAPAS_PASTAS_FRESCAS = this.page.locator('//a [@id="menu-item-category-tapas-pastas-frescas"]')
    }

    async clickLacteosProdsFrescosTapasPastasFrescas(): Promise<void> {
        await this.click(this.TAPAS_PASTAS_FRESCAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosTapasPastasFrescas(): Promise<void> {
        await this.clickLacteosProdsFrescosTapasPastasFrescas()
    }
}
