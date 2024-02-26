import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMascotasAlimentosGatos extends BasePage {

    readonly ALIMENTOS_GATOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ALIMENTOS_GATOS = this.page.locator('//a [@id="menu-item-category-alimentos-gatos"]')
    }

    async clickAlimentosGatos(): Promise<void> {
        await this.click(this.ALIMENTOS_GATOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMascotasAlimentosGatos(): Promise<void> {
        await this.clickAlimentosGatos()
    }
}
