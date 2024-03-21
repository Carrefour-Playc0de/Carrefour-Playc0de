import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaJabonesLiquidos extends BasePage {

    readonly JABONES_LIQUIDOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JABONES_LIQUIDOS = this.page.locator('//* [@id="menu-item-category-jabones-liquidos"]')
    }

    async clickPerfumeriaJabonesLiquidos(): Promise<void> {
        await this.click(this.JABONES_LIQUIDOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaJabonesLiquidos(): Promise<void> {
        await this.clickPerfumeriaJabonesLiquidos()
    }
}
