import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburFrutasVerdurasVerdurasCortadasEnsaladasPreparadas extends BasePage {

    readonly VERDURAS_CORTADAS_ENSALADAS_PREPARADAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VERDURAS_CORTADAS_ENSALADAS_PREPARADAS = this.page.locator('//a [@id="menu-item-category-verduras-cortadas-ensaladas"]')
    }

    async clickFrutasVerdurasVerdurasCortadasEnsaladasPreparadas(): Promise<void> {
        await this.click(this.VERDURAS_CORTADAS_ENSALADAS_PREPARADAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburFrutasVerdurasVerdurasCortadasEnsaladasPreparadas(): Promise<void> {
        await this.clickFrutasVerdurasVerdurasCortadasEnsaladasPreparadas()
    }
}
