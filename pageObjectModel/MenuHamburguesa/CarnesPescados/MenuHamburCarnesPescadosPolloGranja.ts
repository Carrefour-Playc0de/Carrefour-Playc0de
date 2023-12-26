import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCarnesPescadosPolloGranja extends BasePage {

    readonly POLLO_GRANJA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.POLLO_GRANJA = this.page.locator('//a [@id="menu-item-category-pollo-granja"]')
    }

    async clickCarnesPescadosPolloGranja(): Promise<void> {
        await this.click(this.POLLO_GRANJA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburCarnesPescadosPolloGranja(): Promise<void> {
        await this.clickCarnesPescadosPolloGranja()
    }
}
